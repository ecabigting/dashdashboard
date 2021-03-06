import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={"widgetLgButton "+type}>{type}</button>;
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">
                Latest Transactions
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">
                        Customer
                    </th>
                    <th className="widgetLgTh">
                        Date
                    </th>
                    <th className="widgetLgTh">
                        Amount
                    </th>
                    <th className="widgetLgTh">
                        Status
                    </th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://picjumbo.com/wp-content/uploads/woman-in-a-glittering-sequin-party-dress-at-the-celebration-party-free-photo-2210x3315.jpg"
                         alt="" 
                         className="widgetLgImg" />
                         <span className="widgetLgName">Big Berta</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$ 150.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approve"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://picjumbo.com/wp-content/uploads/sexy-girl-wearing-bikini-swimsuit-in-a-sea-free-photo-2210x1473.jpg"
                         alt="" 
                         className="widgetLgImg" />
                         <span className="widgetLgName">Bikini Babe</span>
                    </td>
                    <td className="widgetLgDate">24 Nov 2021</td>
                    <td className="widgetLgAmount">$ 50.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Decline"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://picjumbo.com/wp-content/uploads/naked-woman-covering-her-breasts-2210x1473.jpg"
                         alt="" 
                         className="widgetLgImg" />
                         <span className="widgetLgName">Steamy Sussy</span>
                    </td>
                    <td className="widgetLgDate">15 Nov 2021</td>
                    <td className="widgetLgAmount">$ 280.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
