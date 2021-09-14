import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {
        products: [
            {id: 1, name: "Prod1", price: "10"},
            {id: 2, name: "Prod2", price: "20"},
            {id: 3, name: "Prod3", price: "30"},
        ]
    }

    delete = (targetId) => {
        this.setState({
            products: this.state.products.filter(({id}) => id !== targetId)
        })
    }

    render() {
        const {products} = this.state
        return (
            <table className={"App"}>
                <thead>
                <tr>
                    <th className={"products_th"}>#</th>
                    <th className={"products_th"}>Name</th>
                    <th className={"products_th"}>Price</th>
                    <th className={"products_th"}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map(({id, name, price}) => (
                    <tr key={id}>
                        <td className={"products_td"}>{id}</td>
                        <td className={"products_td"}>{name}</td>
                        <td className={"products_td"}>{price}</td>
                        <td className={"products_td"}>
                            <button className={"products_btn"}
                                    onClick={() => this.delete(id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default App;
