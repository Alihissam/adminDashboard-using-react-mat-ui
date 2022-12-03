import React from 'react'
import './Featureinfo.css'
import { BiDownArrowAlt } from 'react-icons/bi';
import { BiUpArrowAlt } from 'react-icons/bi';

const Featureinfo = () => {
    return (
        <div className="featured">
            <div className="featureditem">
                <span className="featuredTitle">
                    Revenue
                </span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2.415</span>
                    <span className="featuredmoneyRate"> -11.4 <BiDownArrowAlt className="featureicon negative" /></span>
                </div>
                <span className="featuresub">Compare to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$4.415</span>
                    <span className="featuredmoneyRate"> -1.4 <BiDownArrowAlt className="featureicon negative" /></span>
                </div>
                <span className="featuresub">Compare to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,215</span>
                    <span className="featuredmoneyRate"> +2.4 <BiUpArrowAlt className="featureicon positive" /></span>
                </div>
                <span className="featuresub">Compare to last month</span>
            </div>
        </div>
    )
}

export default Featureinfo
