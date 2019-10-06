import React, { Component, Fragment } from 'react';
import Card from './Card';

function Home({ items }) {
    return (
        <div className="container">
                <div
                    className="row justify-content-start"
                >
                    {items.map((item, i) =>
                        <Fragment>
                            <div
                                className="col-lg-2 col-md-5 col-sm-10 mb-3"
                                key={item.id}
                            >
                                <Card {...item} />
                            </div>
                            {/**
                                (i + 1) % 5 === 0
                                    ? <div className="w-lg-100" />
                                    : null
                            **/null}
                        </Fragment>
                    )}
                </div>
        </div>
    );
}

export default Home;
