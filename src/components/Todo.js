import React, { Component } from 'react';
import '../App.css';
class Todo extends Component {
    state= {
        mockData:[
            {
            id: 1,
            title:"buy milk",
            date: new Date()
            },
    ]
        
    }
    onDeleteHandle(){
        let id= arguments[0];
        this.setState({
            mockData:this.state.mockData.filter(item=> {
                if(item.id !== id){
                    return item;
                }
                
            })
        })
    }   


    onSubmitHandle(event){
        event.preventDefault();
        
        this.setState({ 
            mockData: [...this.state.mockData,
             {  id: Date.now(),     
                title: event.target.item.value,   
               
                date: new Date()   
             }]  
             
        });
    }
    onEditHandle(){
        
    }

    render(){
        return (
            <div className="todoTitle">
                    <div className="todouiinkists">
                        <form onSubmit={this.onSubmitHandle.bind(this)}>   
                            <input type="text" name="item" className="item" />       
                            <button className="btn-add-item">Add</button>   
                        </form>
                        <ul>  
                                {this.state.mockData.map(item => (
                                    <li key={item.id}>
                                        {item.title} 
                                              
                                        <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>          
                                        <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>       
                                        {/* <button onClick={this.onCompleteHandle}>Complete</button>          */}
                                    </li>       
                                 ))}  
                        </ul> 
                    </div>
            </div> 
        );
    }
}

export default Todo;
