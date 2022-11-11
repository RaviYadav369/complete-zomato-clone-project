import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";

//redux
import { useDispatch } from 'react-redux'
import { postReview } from '../../redux/reducers/review/review.action';

const ReviewModal = ({ isOpen, setisOpen, type, ...props }) => {
    const { id } = useParams();
    const [reviewData, setrevieData] = useState({
        
        reviewsText: "",
        isRestaurantReviews: false,
        isFoodReviews: false,
        rating: 0,
    });

    const dispatch = useDispatch();

  

    const handleChange = (event) => {
        setrevieData((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
        }));
    };

    const handleRating = (rating) => {
        setrevieData((prev) => ({ ...prev, rating }));
    };
    // console.log(reviewData.isRestaurantReviews, reviewData.isFoodReviews);

    const toggleDining = () => {
        setrevieData((prev) => ({
            ...prev,
            isRestaurantReviews: !prev.isRestaurantReviews,
            isFoodReviews: false,
        }));
    };

    useEffect(() => {
        if (type === "delivery")
            setrevieData((prev) => ({
                ...prev,
                isFoodReviews: true,
                isRestaurantReviews: false,
            }));
        else if (type === "dining")
            setrevieData((prev) => ({
                ...prev,
                isRestaurantReviews: true,
                isFoodReviews: false,
            }));
    }, [type]);

    const toggleDelivery = () => {
        setrevieData((prev) => ({
            ...prev,
            isFoodReviews: !prev.isFoodReviews,
            isRestaurantReviews: false,
        }));
    };

    const closeModal = () => {
        setisOpen(false);
    };

    const submit = () => {
        dispatch(postReview({ ...reviewData, restaurant: id }))
        closeModal();
        setrevieData({
           
            reviewsText: "",
            isRestaurantReviews: false,
            isFoodReviews: false,
            rating: 0,
        })
    };

    
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add Review
                                    </Dialog.Title>
                                    <div className="mt-2 flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="review"
                                                    id="dining"
                                                    checked={reviewData.isRestaurantReviews}
                                                    onChange={toggleDining}
                                                />
                                                <label htmlFor="dining">Dining</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="review"
                                                    id="delivery"
                                                    checked={reviewData.isFoodReviews}
                                                    onChange={toggleDelivery}
                                                />
                                                <label htmlFor="delivery">Delivery</label>
                                            </div>
                                        </div>
                                        <Rating
                                            count={5}
                                            size={24}
                                            value={reviewData.rating}
                                            onChange={handleRating}
                                        />
                                        <form className="flex flex-col gap-4">
                                            {/* <div className="flex flex-col gap-2">
                                                <label htmlFor="subject">Subject</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    placeholder="Add context...."
                                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline focus:border-zomato-400"
                                                    value={reviewData.subject}
                                                    onChange={handleChange}
                                                />
                                            </div> */}
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="reviewsText">Comment</label>
                                                <textarea
                                                    type="text"
                                                    rows={5}
                                                    id="reviewsText"
                                                    placeholder="Add context...."
                                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline focus:border-zomato-400"
                                                    value={reviewData.reviewsText}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-zomato-100 px-4 py-2 text-sm font-medium text-zomato-500 hover:bg-zomato-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zomato-500 focus-visible:ring-offset-2"
                                            onClick={submit}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default ReviewModal;
