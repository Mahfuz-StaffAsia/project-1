import React from 'react';

const Work = () => {
    return (
        <div>
            <section className="work-process">
                <div className="auto-container">
                <div className="sec-title text-center">
                    <p>Our Work Process</p>
                    <h2>Data science solutions for startup</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 work-block">
                    <div className="work-block-one wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-big-data" />
                            <div className="count">01</div>
                            <div className="bg-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-1.png)'}} />
                            <div className="overlay-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-2.png)'}} />
                        </div>
                        <h4><a href="index.html">Frame the Problem</a></h4>
                        <p>To take a trivial example, which idea of ever undertakes.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 work-block">
                    <div className="work-block-one wow slideInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-ui" />
                            <div className="count">02</div>
                            <div className="bg-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-1.png)'}} />
                            <div className="overlay-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-2.png)'}} />
                        </div>
                        <h4><a href="index.html">Collect the Data</a></h4>
                        <p>Best every pleasure is too welcomed every pain avoided.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 work-block">
                    <div className="work-block-one wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-brain-1" />
                            <div className="count">03</div>
                            <div className="bg-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-1.png)'}} />
                            <div className="overlay-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-2.png)'}} />
                        </div>
                        <h4><a href="index.html">Process the Data</a></h4>
                        <p>Have to be repudiated annoyances accepted the wise.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Work;