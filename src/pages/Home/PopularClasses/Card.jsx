// import Link from 'react-router-dom'

const Card = ({ item }) => {
    const {name, image, availableSeats, price, description, instructorName, status, totalEnrolled } = item

    return (
        <div className="shadow-lg rounded-lg p-3 flex flex-col justify-between border border-secondary overflow-hidden m-4">
            <img src={image} alt="" />
            <div className="p-2">
                <h2 className="text-xl mb-2 font-semibold dark:text-white">{name}</h2>
                <h3 className="text-gray-600 mb-2 ">Available Seats: {availableSeats}</h3>
                <h3 className="text-gray-600 mb-2">Price: {price}</h3>
                <h4 className="text-gray-600 mb-2">Total Student: {totalEnrolled}</h4>
                {/* <Link to={`class/${_id}`} className="text-center">
                    <button className="btn py-2 w-full bg-secondary text-white rounded-lg font-semibold mt-2">Select</button>
                </Link> */}
                <div className="text-center">
                <button className="btn py-2 w-full bg-secondary text-white rounded-lg font-semibold mt-2">Select</button>
                </div>

            </div>
        </div>
    );
};

export default Card;