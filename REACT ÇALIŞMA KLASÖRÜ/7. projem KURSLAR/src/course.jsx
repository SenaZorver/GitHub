import React from 'react'

function course({ course }) {
                    const { id, title, description, price, link, image } = course;
                    return (
                                        <div className='course'>
                                                            <div className='course'>
                                                                                <img src={image} width={200} height={100} />
                                                                                <h4 className='course-title'>{title}</h4>
                                                                                <h5 className='course-desc'>{description}</h5>
                                                                                <h3 className='course-price'>{price} ₺
                                                                                </h3>
                                                                                <div className='course-link'><a style={{ textDecoration: 'none' }} href={link}>satın almak için</a></div>
                                                            </div>
                                        </div>
                    )
}
export default course 