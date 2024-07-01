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
      "http://localhost:3000/api/v1/payment/order",
      { amount: price },
    );

    const order = await response.data.data;
    console.log(order);
    const option = {
      key: import.meta.env.RAZORPAY_KEY_ID,
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className='flex justify-between gap-32'>
      <div className="mt-4"> 
        <p>Available</p>       
        <button
          className="px-4 py-4 bg-gray-300 text-white "
        >
        </button>  
         </div>
      <div className="mt-4"> 
        <p>Sold</p>       
        <button
          className="px-4 py-4 bg-red-600 text-white "
        >
        </button>  
         </div>
         <div className="mt-4">
         <p>Selected</p> 
        <button
          className="px-4 py-4 bg-green-500 text-white "
        >
        </button>
       </div>
       </div>  
       <div className='w-1/2 h-14 border border-gray-300 m-10  flex flex-col items-center justify-center  '>hey...Screen is here</div>
    <div className=" flex flex-wrap justify-center gap-5 mt-20"> 
      {Array.from({ length: Math.ceil(SEAT_COUNT /10) }).map((_, row) => (
        <div key={row} className="seat-row flex flex-row justify-between gap-5"> 
          {Array(10).fill(null).map((_, col) => {
            const seatNumber = calculateSeatNumber(row, col);
            const isAvailable = isSeatAvailable(row, col);
            const seatClass = isAvailable
              ? seat.some((seats) => seats.row === row && seats.col === col)
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
              : 'bg-green-500 text-white'; 


            return (
              <div>
              <div
                key={`${row}-${col}`}
                className={` w-12 h-12 border rounded text-center flex items-center justify-center cursor-pointer ${seatClass}`} 
                onClick= {() => handleSeatClick(row, col)}>
                {seatNumber}
              </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
    <div className='flex justify-between gap-3'>
      <div className="mt-4">        <button
          className="px-4 py-2 bg-pink-600 text-white rounded"
          onClick={() => handleConfirm()}
        >
          Book Seats
        </button>  
         </div>
         <div className="mt-4">
        <button
          className="px-4 py-2 bg-red-900 text-white rounded"
          onClick={() =>  paymentHandler()}
        >
          Paynow{price}
        </button>
       </div>
       </div> 
       </div> 

  )
}

export default SeatLayout