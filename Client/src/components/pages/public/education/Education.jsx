import React, { useState } from 'react';
import './Education.css';
import { Steps } from 'antd';
import { educationData } from './EducationData';

const Education = () => {
    const [current, setCurrent] = useState(educationData.length - 1);
    const onChange = (value) => {
        setCurrent(value);
    };

    return (
        <section id="education" className="mx-auto bg-primary p-4">
            <div id="education-container" className="container mx-auto flex h-full flex-col justify-evenly">
                <h1 id="education-page-title" className="mb-3 text-center text-2xl text-tertiary">
                    Education & Qualifications
                </h1>

                <div id="education-wrapper" className="flex h-[90%] justify-center rounded-2xl border-2 border-secondary">
                    <Steps
                        className="h-full w-full p-2"
                        onChange={onChange}
                        current={current}
                        size="default"
                        direction="vertical"
                        items={educationData.map((item) => ({
                            title: <span id="step-title">{item.title}</span>,
                            description: (
                                <ul id="step-description">
                                    {item.details.map((detail, index) => (
                                        <li key={index}>
                                            {detail.link ? (
                                                <a href={detail.link} target="_blank" rel="noopener noreferrer">
                                                    {detail.text}
                                                </a>
                                            ) : (
                                                detail.text
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ),
                        }))}
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;