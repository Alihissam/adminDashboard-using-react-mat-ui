import React from 'react'
import './widgetLg.css';
import hissam from '../../images/hissam.jpg'

const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={" widgetButton " + type}>{type}</button>
    }
    return (
        <div className="widget_large">
            <h3 className="widgetlgTitle">Latest transaction</h3>
            <table className="widgetlgtable">
                <tr className="widgetlgtr">
                    <th className="whidgetlgth">Customer</th>
                    <th className="whidgetlgth">Date</th>
                    <th className="whidgetlgth">Amount</th>
                    <th className="whidgetlgth">Status</th>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlgUser">
                        <img src={hissam} alt="hissam" className="widgetlgimg" />
                        <span className="widgetlgname">Hissam Ali</span>
                    </td>
                    <td className="widgetlgdate">23 Dec 2021</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgstatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlgUser">
                        <img src={hissam} alt="hissam" className="widgetlgimg" />
                        <span className="widgetlgname">Hissam Ali</span>
                    </td>
                    <td className="widgetlgdate">23 Dec 2021</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgstatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlgUser">
                        <img src={hissam} alt="hissam" className="widgetlgimg" />
                        <span className="widgetlgname">Hissam Ali</span>
                    </td>
                    <td className="widgetlgdate">23 Dec 2021</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgstatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlgUser">
                        <img src={hissam} alt="hissam" className="widgetlgimg" />
                        <span className="widgetlgname">Hissam Ali</span>
                    </td>
                    <td className="widgetlgdate">23 Dec 2021</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgstatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
