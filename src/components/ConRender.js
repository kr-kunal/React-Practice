import React, { Component } from "react";

class ConRender extends Component {
  state = {
    value: true,
  };
  
  render() {

     let pet = this.state.value ? 'Show Cat' : 'Show Dog';

     let cng = () => {
      this.setState({ value: !this.state.value })

      // this.state.value ?  : this.setState({ value: true })
        // if (this.state.value) {
        //     return this.setState({ value: false });
        // }
        // else{
        //    return this.setState({ value: true });
        // }
      
     }     

    return (
      <>
        {this.state.value ? (
          <div className="m-3">
            <img src="https://media.istockphoto.com/photos/crazy-looking-black-and-white-border-collie-dog-say-looking-intently-picture-id1213516345?k=20&m=1213516345&s=612x612&w=0&h=_XUSwcrXe5HjI2QEby0ex6Tl1fB_YJUzUU8o2cUt0YA=" alt="DOG" />
          </div>
        ) : (
          <div className="m-3">
           
            <img src="https://media.istockphoto.com/photos/cute-red-kitten-is-sleeping-on-his-back-and-smiling-paws-up-concept-picture-id1144982182?k=20&m=1144982182&s=612x612&w=0&h=VBL-PDRr9FddwkY4c7yBIkozv6669r-xNl-QJRRb1iw=" alt="CAT" />
          </div>
        )}

        <button
          className="btn btn-md m-5 btn-danger"
          onClick={cng}
        >           
          {pet}
        </button>
        
      </>
    );
  }
}

export default ConRender;
