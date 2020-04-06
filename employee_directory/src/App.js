import React, { Component } from "react";
import Container from "./components/Container/Container";
import employee from "./employee.json";
import Header from "./components/Header/Header";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import ListHeader from "./components/ListHeader/ListHeader";
import Search from "./components/Search/Search";
// import API from "./utils/API";

class App extends Component {

    state = {
        name: "",
        employee: employee,
        employeeName: [],
        sort: false,
        emptyArray: true,
        // apiList: [],
    };

    // to complete later
    // empList = query => {
    //     const apiList = [];
    //     for (var i = 0; i < 12; i++) {
    //         API.search(query)
    //             .then(res =>
    //                 apiList.push(res.data))
    //             .catch(err => console.log(err))
    //     };
    //     console.log(apiList);
    // };

    inputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    ase = () => {
        this.setState({
            employeeName: [],
            emptyArray: true,
        })
        let sortedName = [...employee];
        sortedName.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (b.name < a.name) {
                return 1;
            }
            return 0;
        });
        this.setState({
            emptyArray: false,
            employeeName: sortedName,
        })
    };

    des = () => {
        this.setState({
            employeeName: [],
            emptyArray: true,
        })
        let sortedName = [...employee];
        sortedName.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            } else if (b.name > a.name) {
                return 1;
            }
            return 0;
        });
        this.setState({
            emptyArray: false,
            employeeName: sortedName,
        })
    };

    changeOrder = () => {
        const orgSort = this.state.sort;
        if (!orgSort) {
            this.ase();
            this.setState({
                sort: true,
            });
            // this.empList();
        } else if (orgSort) {
            this.des();
            this.setState({
                sort: false,
            });
        } else {
            console.log("something wrong");
        }
    };

    render() {
        const searchName = this.state.name;
        let useArray;
        if (this.state.emptyArray) {
            useArray = this.state.employee;
        } else if (!this.state.emptyArray) {
            useArray = this.state.employeeName;
        };
        // console.log(useArray);
        const filteredData = useArray.filter(
            data => data.name.toLowerCase().includes(searchName));
        const employeeData = filteredData.map(employee => (
            <EmployeeList
                key={employee.id}
                id={employee.id}
                name={employee.name}
                image={employee.image}
                phone={employee.phone}
                email={employee.email}
                date={employee.date}
            />
        ));

        const iconShow = this.state.sort ? "fa fa-arrow-up" : "fa fa-arrow-down";

        return (
            <Container>
                <Header />
                <Search
                    name={this.state.name}
                    inputChange={this.inputChange}
                />
                <ListHeader
                    iconShow={iconShow}
                    changeOrder={this.changeOrder}
                >
                    {employeeData}
                </ListHeader>
            </Container >
        );
    }
};

export default App;
