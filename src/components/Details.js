import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'


export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
                {value=>{ const { id, company, info, title, img, price, inCart  }= value.detailProduct;
                    return( 
                        <div className="container py-5">
                            {/* titlt */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end of title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid"/>
                                 </div>
                                 {/* product text */}
                                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                     <h2>model:{title}</h2>
                                     <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                     </h4>
                                     <h4 className="text-blue">
                                         <strong>price:
                                             <span>$</span>
                                             {price}</strong>
                                     </h4>
                                     <p className="text-capitalize font-weight-bold mt-3 mb-o">
                                         some information about the product
                                     </p>
                                     <p className="text-muted-lead">{info}</p>
                                 {/* Buttons */}
                                 <div>
                                    <Link to='/'>
                                        <ButtonContainer>
                                            Back to Product
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart
                                
                                    disabled={inCart ? true : false}
                                    onClick={()=>{
                                        value.addToCart(id)
                                        value.openModal(id);
                                        }}
                                    >
                                            {inCart ? 'incart' : 'add to cart' }
                                     </ButtonContainer>
                                 </div>
                                 </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
