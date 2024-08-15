// src/components/ShopchModal.tsx
import React, { useState } from 'react';
import card from '../card.json';

import { IoBagCheckOutline } from "react-icons/io5";

type ShopModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: Function;
    categoryIuud: string
}

export default function ShopModal({ isModalOpen, setIsModalOpen, categoryIuud }: ShopModalProps) {
console.log("🚀 ~ ShopModal ~ categoryIuud:", categoryIuud)    

    const shopCard: any = card
    const categories: any = shopCard[0].categories
    const items: any = shopCard[0].items
    type Product={
        id:string;
        title: string;
        urlImage: string;
        price: string;
    }
    const [addProduct, setAddProduct]= React.useState<Product[]>([]);
    const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
    
    const handleClose=()=>{
        setIsModalOpen(!isModalOpen)
        const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
            backdrop.remove();
            }
    }
    const handleClick=(newProduct: Product)=>{
        console.log(newProduct)
        setAddProduct([...addProduct, newProduct])
        console.log({addProduct});
        if (selectedProductIds.includes(newProduct.id)) {
            setSelectedProductIds(selectedProductIds.filter(id => id !== newProduct.id));
        } else {
            setSelectedProductIds([...selectedProductIds, newProduct.id]);
        }
    }
    return (
        <div className="modal fade" id="modalShop" tabIndex={-1} aria-labelledby="modalShopLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalShopLabel"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                </div>
                <div className="modal-body ">
                <h4>{categories[categoryIuud].title}</h4>
                <img src={categories[categoryIuud].imageUrl.Default.urlDefault} className="img-fluid w-100 rounded-top mb-3" alt={categories[categoryIuud].title} style={{height: '150px'}} />
                <p>{categories[categoryIuud].description.Default.nameDefault}</p>
                {Object.values(items).map((item: any) =>
                                item.categoryParent === categoryIuud ? (<div key={item.id}> 
                                    <div className='align-items-center border border-grey m-1 p-1 rounded-2' style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <img 
                                        src={item.imageUrl.Default.urlDefault} 
                                        className="img-fluid w-10 rounded-top mb-3" 
                                        alt={categories[categoryIuud].title} 
                                        style={{height: '150px'}} 
                                    /></div>
                                    <div>
                                    {                                        
                                        // Loop through advancedPrice and find the one with originalKeyElements containing "WEB"
                                        Object.values(item.price.advancedPrice).map((prices: any) => (
                                            prices.originalKeyElements.includes("WEB") && prices.originalKeyElements.includes("3cb893e8-0f3a-4dcf-aab7-9545e97dfda7")? (
                                                <div key={prices.pricettc}>{prices.pricettc}$</div>
                                            ) : null
                                        ))
                                    }
                                    {
                                        
                                    }
                                </div>
                                    <div>
                                        <button className="btn border border-secondary rounded-pill px-3 text-primary" onClick={() => handleClick({id:item.id,title:item.title,urlImage:item.imageUrl.Default.urlDefault,price:item.price})}>{selectedProductIds.includes(item.id) ? <IoBagCheckOutline style={{ color: 'green' }} /> : <i className="fa fa-shopping-bag text-primary"></i>}</button ></div></div>
                                </div>) : (
                                    null
                                )
                            )}
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cancel</button>
                    <button type="button" className="btn btn-primary">Valider</button>
                </div>
            </div>
        </div>
    </div>
    );
}
;
