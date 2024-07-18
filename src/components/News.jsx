import React from 'react';
import shipImage from '../assets/img/NI1.png';
import airImage from '../assets/img/NI2.png';
import containerImage from '../assets/img/NI3.png';
import truckImage from '../assets/img/NI4.png';
import tealcommentImg from '../assets/img/comments.png';
import whitecommentImg from '../assets/img/commets2.png';
import rectangle from '../assets/img/Rectangle 64.png'

const newsData = [
    {
        id: 1,
        date: '26 MAY',
        title: 'Integer Congue Elit',
        author: 'Admin',
        comments: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        image: truckImage,
    },
    {
        id: 2,
        date: '22 MAY',
        title: 'Integer Congue Elit',
        author: 'Admin',
        comments: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        image: containerImage,
    },
    {
        id: 3,
        date: '20 MAY',
        title: 'Integer Congue Elit',
        author: 'Admin',
        comments: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        image: airImage,
    },
    {
        id: 4,
        date: '15 MAY',
        title: 'Integer Congue Elit',
        author: 'Admin',
        comments: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        image: shipImage,
    },
];

const News = () => {
    return (
        <div id='blogs' className="p-4 bg-white">
            <div className="mb-4 text-center">
                <h1 className="mt-2 mb-8 font-bold lg:text-3xl xs:text-2xl">Latest News</h1>
                <div className='flex justify-center gap-4 mb-4 '>
                <img src={rectangle} alt='rectangle' className="object-cover w-3 h-3" />
                <span className='text-xs font-medium '>INTEGER CONGUE ELIT</span>
                </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 ">
                {newsData.map((news, index) => (
                    <div key={news.id} className="relative flex shadow-lg xs:flex-col lg:flex-row"
                        style={{ backgroundColor: index === 0 ? '#10A480' : '#EFEDED' }}
                    >
                        <div className="overflow-hidden lg:w-1/2 xs:w-full md:h-custom-full">
                            <img src={news.image} alt={news.title} className="object-cover w-full h-custom-full" />
                        </div>
                        <div className="flex flex-col justify-between p-6 lg:w-2/3 xs:w-full">
                            <div>
                                <h2 className={`mb-2 text-lg font-bold ${index === 0 ? 'text-white' : 'text-black'}`}>{news.title}</h2>
                                <div className="flex items-center justify-between my-3 text-sm text-gray-500">
                                    <div className={`flex items-center space-x-2 ${index === 0 ? 'text-white' : 'text-black'}`}>
                                        <span>{news.author}</span>
                                        <img
                                            src={index === 0 ? tealcommentImg : whitecommentImg}
                                            alt="comments"
                                            className="object-cover w-5 h-5"
                                        />
                                        <span>{news.comments}</span>
                                    </div>
                                </div>
                                <p className={`mb-4 ${index === 0 ? 'text-white' : 'text-black'}`}>{news.description}</p>
                            </div>
                        </div>
                        <div className={`absolute top-0 left-0 p-2 text-white whitespace-pre-line ${index === 0 ? 'bg-teal-500' : 'bg-gray-900'}`}>
                            {news.date.split(' ')[0]} {'\n'}
                            {news.date.split(' ')[1]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
