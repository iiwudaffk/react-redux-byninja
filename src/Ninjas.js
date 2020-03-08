import React, { Component } from 'react'



class Ninjas extends Component {
    render() {
        //console.log(this.props);
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(n=>{
            return (
                <div className="ninja" key={n.id}>
                <p>
                    This is Ninjas
                </p>

                <div>Name: {n.name}</div>
                <p>Age: {n.age}</p>
                <p>Type: {n.type}</p>
            </div>
            )
        })
        return (
            <div className="ninja-List">
                {ninjaList}
            </div>
        )
    }
}

export default Ninjas;