import React from 'react'
import card from '../card.json';
import ShopModal from './ShopModal';

export default function TheProducts() {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [categoryIuud, setCategroryIuud] = React.useState<string>("");
    const handleClick = (iuud: string) => {
        
        setIsModalOpen(true)
        console.log(isModalOpen)
        setCategroryIuud(iuud)
        
    };
    React.useEffect(() => {
        if (isModalOpen) {
            const modalElement = document.getElementById('modalShop');
            if (modalElement) {
                modalElement.classList.add('show');
                modalElement.style.display = 'block';
                modalElement.removeAttribute('aria-hidden');
                modalElement.setAttribute('aria-modal', 'true');

                const backdrop = document.createElement('div');
                backdrop.className = 'modal-backdrop fade show';
                document.body.appendChild(backdrop);
            }
        } else {
            const modalElement = document.getElementById('modalShop');
            if (modalElement) {
                modalElement.classList.remove('show');
                modalElement.style.display = 'none';
                modalElement.setAttribute('aria-hidden', 'true');
                modalElement.removeAttribute('aria-modal');
            }

            const backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(backdrop => backdrop.parentNode?.removeChild(backdrop));
        }
    }, [isModalOpen]);

    

    const shopCard: any = card
    const categories: any = shopCard[0].categories
    const items: any = shopCard[0].items
  return (
    <div className="tab-content pt-5">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {Object.keys(categories).length > 0 ? (
                                                Object.entries(categories).map(([iuud, category]: any) => (
                                                    <div className="col-md-6 col-lg-4 col-xl-3" key={category.id}>
                                                        <div
                                                            className="rounded position-relative fruite-item border border-warning"
                                                            onClick={() => handleClick(iuud)}
                                                        >
                                                            <div className="fruite-img">
                                                                <img
                                                                    src={category.imageUrl.Default.urlDefault}
                                                                    className="img-fluid w-100 rounded-top"
                                                                    alt={category.title}
                                                                    style={{ height: '150px' }} />
                                                            </div>
                                                            <div className="p-4 rounded-bottom">
                                                                <h4 className='pb-3 pt-2'>{category.title}</h4>
                                                                <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{category.description.Default.nameDefault}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                ))
                                            ) : (
                                                <p>No categories available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isModalOpen && <ShopModal categoryIuud={categoryIuud} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
                        </div>
  )
}


