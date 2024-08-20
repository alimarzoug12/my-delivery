import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import card from '../card.json';
import { useDispatch } from "react-redux";
import { shopActions } from '../slices/shopSlice';
import { IoBagCheckOutline } from "react-icons/io5";

interface Product {
    id: string;
    title: string;
    urlImage: string;
    price: number;
    quantity: number;
}

interface ShopModalProps {
    item: Product;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>; // Update the type
    categoryIuud: string;
}

export default function ShopModal({ item, isModalOpen, setIsModalOpen, categoryIuud }: ShopModalProps) {
    const { id, title, urlImage, price } = item;
    const dispatch = useDispatch();
    const [addProduct, setAddProduct] = useState<Product[]>([]);
    const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleClose = () => {
        setIsModalOpen(false); // Close the modal properly
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    };

    const handleClick = (newProduct: Product) => {
        incrementItem(newProduct);
        setAddProduct([...addProduct, newProduct]);
        if (selectedProductIds.includes(newProduct.id)) {
            setSelectedProductIds(selectedProductIds.filter(id => id !== newProduct.id));
        } else {
            setSelectedProductIds([...selectedProductIds, newProduct.id]);
        }
    };

    const incrementItem = (product: Omit<Product, 'quantity'>) => {
        dispatch(
            shopActions.addItem({
                id: product.id,
                title: product.title,
                urlImage: product.urlImage,
                price: product.price,
            })
        );
    };

    const handleEventValidate = () => {
        handleClose();
        navigate('/cart');
        console.log("Selected Products:", addProduct);
    };

    const shopCard: any = card;
    const categories: any = shopCard[0].categories;
    const items: any = shopCard[0].items;

    return (
        <React.Fragment>
            <div className="modal fade show" id="modalShop" tabIndex={-1} aria-labelledby="modalShopLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalShopLabel">{title}</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <h4>{categories[categoryIuud].title}</h4>
                            <img 
                                src={categories[categoryIuud].imageUrl.Default.urlDefault} 
                                className="img-fluid w-100 rounded-top mb-3" 
                                alt={categories[categoryIuud].title} 
                                style={{ height: '150px' }} 
                            />
                            <p>{categories[categoryIuud].description.Default.nameDefault}</p>
                            {Object.values(items).map((item: any) =>
                                item.categoryParent === categoryIuud ? (
                                    <div key={item.id}> 
                                        <div className='align-items-center border border-grey m-1 p-1 rounded-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <h4>{item.title}</h4>
                                                <img 
                                                    src={item.imageUrl.Default.urlDefault} 
                                                    className="img-fluid w-10 rounded-top mb-3" 
                                                    alt={categories[categoryIuud].title} 
                                                    style={{ height: '150px' }} 
                                                />
                                            </div>
                                            <div>
                                                {Object.values(item.price.advancedPrice).map((prices: any) => (
                                                    prices.originalKeyElements.includes("WEB") && prices.originalKeyElements.includes("3cb893e8-0f3a-4dcf-aab7-9545e97dfda7") ? (
                                                        <div key={prices.pricettc}>{prices.pricettc}$</div>
                                                    ) : null
                                                ))}
                                            </div>
                                            <div>
                                                <button 
                                                    className="btn border border-secondary rounded-pill px-3 text-primary" 
                                                    onClick={() => handleClick({ 
                                                        id: item.id, 
                                                        title: item.title, 
                                                        urlImage: item.imageUrl.Default.urlDefault, 
                                                        price: item.price, 
                                                        quantity: 1, 
                                                    })}
                                                >
                                                    {selectedProductIds.includes(item.id) ? (
                                                        <IoBagCheckOutline style={{ color: 'green' }} />
                                                    ) : (
                                                        <i className="fa fa-shopping-bag text-primary"></i>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={handleEventValidate}>Validate</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
