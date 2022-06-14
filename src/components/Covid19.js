import React, { useEffect, useState } from 'react';
import './Covid19.css';

const Covid19 = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            // console.log(res);
             const getCovidActualData = await res.json();
            //  console.log(getCovidActualData.statewise[0]);
            setData(getCovidActualData.statewise[0]);

        } catch (err) {
            console.log(err);

        }
    }

    useEffect(() => {
        getCovidData();
    }, [])


    return (
        <div className="p-5">
            <h1 className="text-uppercase text-center"><img src="/dot.png" className="img-fluid dot-img" alt="" /> Live</h1>
            <h2 className="text-uppercase text-center fw-bolder" >Covid 19 Corona Virus Tracker App</h2>
            <div className="row mt-5 p-3 g-5">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card bg-success border border-white p-2">
                        <div className="card-body">
                            <h5 className="card-title text-warning fw-bolder text-uppercase text-center">Our&nbsp;<span className="fs-3">Country</span></h5>
                            <p className="card-text lead fw-bolder text-center text-uppercase fs-2">Pakistan</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card bg-success border border-white p-2">
                        <div className="card-body">
                            <h5 className="card-title text-warning fw-bolder text-uppercase text-center">Total&nbsp;<span className="fs-3">Recovered</span></h5>
                            <p className="card-text lead fw-bolder text-center text-uppercase fs-2">{data.recovered}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card bg-success border border-white p-2">
                        <div className="card-body">
                            <h5 className="card-title text-warning fw-bolder text-uppercase text-center">Total&nbsp;<span className="fs-3">Confirmed</span></h5>
                            <p className="card-text lead fw-bolder text-center text-uppercase fs-2">{data.confirmed}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card bg-success border border-white p-2">
                        <div className="card-body">
                            <h5 className="card-title text-warning fw-bolder text-uppercase text-center">Total&nbsp;<span className="fs-3">Deaths</span></h5>
                            <p className="card-text lead fw-bolder text-center text-uppercase fs-2">{data.deaths}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card bg-success border border-white p-2">
                        <div className="card-body">
                            <h5 className="card-title text-warning fw-bolder text-uppercase text-center">Total&nbsp;<span className="fs-3">Active</span></h5>
                            <p className="card-text lead fw-bolder text-center text-uppercase fs-2">{data.active}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card bg-success border border-white p-2">
                        <div className="card-body">
                            <h5 className="card-title text-warning fw-bolder text-uppercase text-center">Last&nbsp;<span className="fs-3">Updated</span></h5>
                            <p className="card-text lead fw-bolder text-center text-uppercase fs-2">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}



export default Covid19
