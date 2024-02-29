import { MDBInput, MDBCol } from 'mdbreact';

    const SearchBar =  ({ input, setInput }) => { // to be carried over to NavBar Component -> Table Component

    const handleChange = (value) => {
        setInput(value);
    }

    return (
    <MDBCol md="6">
            <MDBInput hint="Search Patient ID" type="text" containerClass="mt-0" value={input} onChange={(e) => handleChange(e.target.value)}/>
            </MDBCol>
    )
}

export default SearchBar