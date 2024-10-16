import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aitems from "./components/Aitems";



class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Grey Chair',
                    img: 'grey-chair.jpg',
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'chairs',
                    price: '49.99'
                },

                {
                    id: 2,
                    title: 'Table',
                    img: 'table.jpg',
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'tables',
                    price: '99.99'
                },

                {
                    id: 3,
                    title: 'Sofa',
                    img: 'sofa.jpg',
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'sofas',
                    price: '249.99'
                },

                {
                    id: 4,
                    title: 'Table lamp',
                    img: 'table_lamp.jpg',
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'lamps',
                    price: '24.99'
                },
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
    }

    render(){
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} />
                <Aitems items={this.state.items} onAdd={this.addToOrder} />
                <Footer />
            </div>
        );
    }

    addToOrder(item) {
        this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;