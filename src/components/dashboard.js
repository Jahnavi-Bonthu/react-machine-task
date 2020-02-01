import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component{
    renderList(){        
        return this.props.employees.map((employee)=>{
            return(
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.phoneNo}</td>
                </tr>
            )
        })
    }
    render(){
        
        
        return(
            <div className="container">
            <h4>Employee Details</h4>
            <table className="ui five column table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderList()}
                    </tbody>
                </table>
                </div>
        )
    }
}

const mapStateProps = (state) =>{
    return {
        employees : state.employees
    }
}
export default connect(mapStateProps,{})(Dashboard);