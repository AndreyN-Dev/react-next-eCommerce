import React from 'react';
import Link from 'next/link';

const ShopBrands = () => (
    <div  className=" mt-20 mb-50">
        <div className="ps-shop-brand-con">
            <h3 >Brands</h3>
            <div ></div>    
        </div>

    <div className="mt-10">
        <div className="ps-shop-brand  ml-20 mr-20">
        <Link href="/shop">
            <a>
                <img src="/static/img/brand/1.jpg" alt="martfury" />
                
            </a>
        </Link>
        <Link href="/shop">
            <a>
                <img src="/static/img/brand/2.jpg" alt="martfury" />
            </a>
        </Link>
        <Link href="/shop">
            <a>
                <img src="/static/img/brand/3.jpg" alt="martfury" />
            </a>
        </Link>
        <Link href="/shop">
            <a>
                <img src="/static/img/brand/4.jpg" alt="martfury" />
            </a>
        </Link>
        </div>
        <div className="ps-shop-brand  ml-20 mr-20 mt-10">
        <Link href="/shop">
            <a>
                <img src="/static/img/brand/5.jpg" alt="martfury" />
            </a>
        </Link>
        <Link href="/shop">
            <a>
                <img src="/static/img/brand/6.jpg" alt="martfury" />
            </a>
        </Link>
        <Link href="/shop">
            <a>
                <img src="/static/img/brand/7.jpg" alt="martfury" />
            </a>
        </Link>
        <Link href="/shop">
            <a>
                <img src="/static/img/brand/8.jpg" alt="martfury" />
            </a>
        </Link>
        </div>
    </div>
    </div>

);

export default ShopBrands;
