import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const SEAT_COUNT = 100;

const SeatLayout = () => {

  const [seat, setseats] = useState([]); 
  const [show, setShow] = useState([]);
  const {showid} = useParams();


 
    useEffect(() => {

      const fetchShow = async () => {
        try {
          const response = await axios.get(`https://movie-ticket-booking-serverside.onrender.com/api/v1/show/${showid}/getshow`); 
          setShow(response.data);
        } catch (error) {
          console.error('Error fetching show:', error);
          
        }
      };
  
      fetchShow ();
    }, [showid]);



  const handleSeatClick = (row, col) => {
    const seatIndex = seat.findIndex((seats) => seats.row === row && seats.col === col);
    if (seatIndex !== -1) {
      setseats(seat.filter((seats) => seats !== seat[seatIndex]));
    } else {
      setseats([...seat, { row, col }]);
    }
  };


  const isSeatAvailable = (row, col) => !seat.some((seats) => seats.row === row && seats.col === col);
  


 const calculateSeatNumber = (row, col) => {
  const alphabet = String.fromCharCode(65 + row); 
  return `${alphabet}${col + 1}`; 
};

  
  

  const handleConfirm = async () => {
    try {

      const data = {

        showid:showid,
        seat:seat
      }
      const res = await axios.post(
        `https://movie-ticket-booking-serverside.onrender.com/api/v1/booking/reserve-seat`,
        data,
      );
      console.log(res.data);
     
    } catch (error) {
      console.log(error);
      
    }
  };

  const price = (show.price)*(seat.length)




  const paymentHandler = async (event) => {
  
    const response = await axios.post(
      "https://movie-ticket-booking-serverside.onrender.com/api/v1/payment/order",
      { amount:price },
    );

    const order = await response.data.data;
    console.log(order);
    const option = {
      key: import.meta.env.VITE_SOME_KEY,
      amount: order.amount,
      currency: order.currency,
      name: "Nisha",
      description: "Test Transaction",
      image: "https://i.ibb.co/5Y3m33n/test.png",
      order_id: order.id,
      handler: async function (response) {
        const body = { ...response };

        const validateResponse = await axios.post(
          "https://movie-ticket-booking-serverside.onrender.com/api/v1/payment/verify",
          body,
        );

        const jsonResponse = await validateResponse;

        console.log("jsonResponse", jsonResponse);
      },
      prefill: {
        name: "Nisha",
        email: "nishanaveen@example.com",
        contact: "00000000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(option);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
    });

    rzp1.open();
    event.preventDefault();
  };




  return (
    
    <div className="container mx-auto mt-8">
      <h1>{show.totalprice}</h1>
    <button className="btn btn-primary m-4 p-2 flex bg-green-800 text-white"   onClick={() => handleConfirm()}>
      Confirm Seats 
    </button>
 
    <div className=" flex flex-wrap justify-center gap-5"> 

      {Array.from({ length: Math.ceil(SEAT_COUNT /10) }).map((_, row) => (
        <div key={row} className="seat-row flex flex-row justify-between gap-5"> 
          {Array(10).fill(null).map((_, col) => {
            const seatNumber = calculateSeatNumber(row, col);
            const isAvailable = isSeatAvailable(row, col);
            const seatClass = isAvailable
              ? seat.some((seats) => seats.row === row && seats.col === col)
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
              : 'bg-red-400 text-white'; 


            return (
              <div>
              <div
                key={`${row}-${col}`}
                className={` seat cursor-pointer px-2 py-2 text-center rounded-f ${seatClass}`} 
                onClick= {() => handleSeatClick(row, col)}>
                {seatNumber}
              </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
    <div className='flex justify-center'>
    <button className="btn btn-primary m-4 p-2 flex bg-gray-500 text-white"  onClick={() => paymentHandler()}>
      PayNow {price}Rs
    </button>
    </div>
  </div>


  )
}

export default SeatLayout