import React, { useState } from 'react';
import { menu_region, menu_list } from '../../assets/assets/frontend_assets/assets';
import './ExploreMenu.css';

const ExploreMenu = ({ region, setRegion, category, setCategory }) => {
  const [step, setStep] = useState(1); // Bước 1: Chọn vùng, Bước 2: Chọn danh mục

  const handleRegionClick = (selectedRegion) => {
    if (region === selectedRegion) {
      // Nếu click lại vào vùng đã chọn, reset về mặc định
      setRegion('All');
    } else {
      setRegion(selectedRegion);
      setStep(2); // Chuyển sang bước 2
    }
  };

  const handleCategoryClick = (selectedCategory) => {
    if (category === selectedCategory) {
      // Nếu click lại vào danh mục đã chọn, reset về mặc định
      setCategory('All');
    } else {
      setCategory(selectedCategory);
    }
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore your choice</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
      </p>

      {/* Bảng 1: Bắc, Trung, Nam */}
      {step === 1 && (
        <div className="explore-menu-list">
          {menu_region.map((item, index) => (
            <div
              onClick={() => handleRegionClick(item.region_id)}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={region === item.region_id ? 'active' : ''}
                src={item.region_image}
                alt=""
              />
              <p className={region === item.region_id ? 'active1' : ''}>{item.region_name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Bảng 2: Mặn, Nước, Tráng miệng */}
      {step === 2 && (
        <div>
          <button
            className="back-button"
            onClick={() => {
              setStep(1); // Quay lại bước 1
              setCategory('All'); // Reset category khi quay lại
            }}
          >
            Quay lại
          </button>
          <div className="explore-menu-list">
            {menu_list.map((item, index) => (
              <div
                onClick={() => handleCategoryClick(item.menu_name)}
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? 'active' : ''}
                  src={item.menu_image}
                  alt=""
                />
                <p className={category === item.menu_name ? 'active1' : ''}>{item.menu_name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <hr />
    </div>
  );
};

export default ExploreMenu;