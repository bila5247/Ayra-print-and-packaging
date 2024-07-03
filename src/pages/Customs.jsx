import React from "react";
import Package from '../assets/www.biotechpackages.com/images/package.webp'
import S from '../assets/www.biotechpackages.com/images/s.png'
import Ayra from '../assets/www.biotechpackages.com/Biotech.mp4'
import Icon8 from '../assets/www.biotechpackages.com/images/icons/icons8-menu.svg'
import Right from '../assets/www.biotechpackages.com/images/icons/right.png'
import Miximg from '../assets/www.biotechpackages.com/images/mix_img.png'

const Customs = () => {
  return (
    <>
      <div className="main_subservicebanner index1">

        <div className="subservice_banner">

          <img
            alt="banner"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="subservice_banner_image"
            src={Package}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
              objectFit: 'cover',
              objectPosition: 'center center',
              color: 'transparent'
            }}
          />
        </div>

        <div className="subservice_banner_data">

          <div className="subservice_content">

            <h2>Packaging</h2>
            <p>Design and order a wide range of fully customizable packaging products for your brand</p>
          </div>

        </div>

      </div>




      <div>

        <div class="main_shopboxx">

          <div class="main_section_package_pack">

            <div name="myScrollToElement">

            </div>

            <h3 id="myScrollToElement2" class="subservicepack_head">
              Shop Custom Boxes</h3>
            <p class="subservicepack_para" style={{ maxWidth: '500px', marginBottom: '10px', minHeight: '65px' }}> A wide range of cardboard postage, product and mailing boxes suitable for various industries. </p>
            <div class="ham_icons1">

              <img src={Icon8} alt="Hamburger Icon" />
            </div>

            <div class="packaging_butn">

              <button type="button" class="package_btn btn btn-primary">

                <a href="tel:923103330109" style={{ color: 'white', textTransform: 'uppercase' }}>
                  Packaging Consultant</a>

              </button>
            </div>

          </div>

          <div class="container">

            <div class="pack_package">

              <div class="main_sidemenu">

                <h1 class="top_category">
                  Category</h1>
                <hr />
                <div class="Faq_section">

                  <div>
                    <div class="faq_question1">
                      <div>
                        <div class="acordianss change_bg">
                          <h5 style={{ fontWeight: ' 600' }}>Custom Boxes</h5><div class="icon_style1 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para1">
                        <a href="/advertising-boxes">
                          <p>Advertising Boxes</p></a>
                        <a href="/bath-bomb-boxes">
                          <p>Bath Bomb Boxes</p></a>
                        <a href="/box-with-window">
                          <p>Box With Window</p></a>
                        <a href="/candle-boxes">
                          <p>Candle Boxes</p></a>
                        <a href="/card-deck-boxes">
                          <p>Card Deck Boxes</p></a>
                        <a href="/clothing-boxes">
                          <p>Clothing Boxes</p></a>
                        <a href="/dispenser-boxes">
                          <p>Dispenser Boxes</p></a>
                        <a href="/gift-boxes">
                          <p>Gift Boxes</p></a>
                        <a href="/hair-extension-boxes">
                          <p>Hair Extension Boxes</p></a>
                        <a href="/pillow-boxes">
                          <p>Pillow Boxes</p></a>
                        <a href="/pr-boxes">
                          <p>PR Boxes</p></a>
                        <a href="/rigid-boxes">
                          <p>Rigid Boxes</p></a>
                        <a href="/shoe-boxes">
                          <p>Shoe Boxes</p></a>
                        <a href="/sleeve-boxes">
                          <p>Sleeve Boxes</p></a>
                        <a href="/soap-boxes">
                          <p>Soap Boxes</p></a>
                        <a href="/tuck-boxes">
                          <p>Tuck Boxes</p></a>
                        <a href="/gable-boxes">
                          <p>Gable Boxes</p></a>
                        <a href="/mailer-boxes">
                          <p>Mailer Boxes</p></a>
                        <a href="/custom-boxes">
                          <p>Custom Boxes</p></a>
                        <a href="/cardboard-boxes">
                          <p>Cardboard Boxes</p></a>
                        <a href="/hard-boxes">
                          <p>Hard Boxes</p></a>
                        <a href="/medicine-boxes">
                          <p>Medicine Boxes</p></a>
                      </div>
                      {/* <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Cosmetic Boxes</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div> */}
                      {/* <div class="SubMenu para">
                        <a href="/compact-boxes">
                          <p>Compact Boxes</p></a>
                        <a href="/contact-lens-boxes">
                          <p>Contact Lens Boxes</p></a>
                        <a href="/cosmetics-boxes">
                          <p>Cosmetics Boxes</p></a>
                        <a href="/eyeliner-boxes">
                          <p>Eyeliner Boxes</p></a>
                        <a href="/eyeshadow-boxes">
                          <p>Eyeshadow Boxes</p></a>
                        <a href="/foundation-boxes">
                          <p>Foundation Boxes</p></a>
                        <a href="/hair-spray-boxes">
                          <p>Hair Spray Boxes</p></a>
                        <a href="/lip-balm-boxes">
                          <p>Lip Balm Boxes</p></a>
                        <a href="/lip-gloss-boxes">
                          <p>Lip Gloss Boxes</p></a>
                        <a href="/lipstick-boxes">
                          <p>Lipstick Boxes</p></a>
                        <a href="/lotion-boxes">
                          <p>Lotion Boxes</p></a>
                        <a href="/makeup-boxes">
                          <p>Makeup Boxes</p></a>
                        <a href="/mascara-boxes">
                          <p>Mascara Boxes</p></a>
                        <a href="/nail-polish-boxes">
                          <p>Nail Polish Boxes</p></a>
                        <a href="/perfume-boxes">
                          <p>Perfume Boxes</p></a>
                        <a href="/counter-display-boxes">
                          <p>Counter Display Boxes</p></a>
                        <a href="/cream-boxes">
                          <p>Cream Boxes</p></a>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Display Boxes</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para">
                        <a href="/4-corner-display-Boxes">
                          <p>4 Corner Display Boxes</p></a>
                        <a href="/cosmetics-display-boxes">
                          <p>Cosmetics Display Boxes</p></a>
                        <a href="/display-boxes">
                          <p>Display Boxes</p></a>
                        <a href="/pop-counter-display-tray">
                          <p>Pop Counter Display Tray</p></a>
                        <a href="/side-lock-tuck-top-display-boxes">
                          <p>Side Lock Tuck Top Display Boxes</p></a>
                      </div>
                      <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Food &amp; Beverages</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para">
                        <a href="/bakery-boxes">
                          <p>Bakery Boxes</p></a>
                        <a href="/cake-boxes">
                          <p>Cake Boxes</p></a>
                        <a href="/candy-boxes">
                          <p>Candy Boxes</p></a>
                        <a href="/chocolate-boxes">
                          <p>Chocolate Boxes</p></a>
                        <a href="/cupcake-boxes">
                          <p>Cupcake Boxes</p></a>
                        <a href="/burger-boxes">
                          <p>Burger Boxes</p></a>
                        <a href="/pizza-boxes">
                          <p>Pizza Boxes</p></a>
                        <a href="/popcorn-boxes">
                          <p>Popcorn Boxes</p></a>
                        <a href="/tea-boxes">
                          <p>Tea Boxes</p></a>
                        <a href="/dessert-boxes">
                          <p>Dessert Boxes</p></a>
                        <a href="/noodle-boxes">
                          <p>Noodle Boxes</p></a>
                        <a href="/pie-boxes">
                          <p>Pie Boxes</p></a>
                        <a href="/cereal-boxes">
                          <p>Cereal Boxes</p></a>
                        <a href="/beverages-boxes">
                          <p>Beverages Boxes</p></a>
                        <a href="/donut-boxes">
                          <p>Donut Boxes</p></a>
                        <a href="/food-boxes">
                          <p>Food Boxes</p></a>
                      </div>
                      <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Metalized Boxes</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para">
                        <a href="/glitter-boxes">
                          <p>Glitter Boxes</p></a>
                        <a href="/gold-foil-boxes">
                          <p>Gold Foil Boxes</p></a>
                        <a href="/holographic-foiling-boxes">
                          <p>Holographic Foiling Boxes</p></a>
                        <a href="/silver-foil-boxes">
                          <p>Silver Foil Boxes</p></a>
                        <a href="/textured-boxes">
                          <p>Textured Boxes</p></a>
                        <a href="/metalized-boxes">
                          <p>Metalized Boxes</p></a>
                        <a href="/hologram-boxes">
                          <p>Hologram Boxes</p></a>
                      </div>
                      <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Rigid Boxes</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para">
                        <a href="/book-style">
                          <p>Book Style</p></a>
                        <a href="/cell-phone-accessories-boxes">
                          <p>Cell Phone Accessories Boxes</p></a>
                        <a href="/collapsible-foldable-boxes">
                          <p>Collapsible - Foldable Boxes</p></a>
                        <a href="/cufflink-boxes">
                          <p>Cufflink Boxes</p></a>
                        <a href="/custom-shape-boxes">
                          <p>Custom Shape Boxes</p></a>
                        <a href="/headphone-boxes">
                          <p>Headphone Boxes</p></a>
                        <a href="/jewelry-boxes">
                          <p>Jewelry Boxes</p></a>
                        <a href="/one-piece-rigid-boxes">
                          <p>One Piece Rigid Boxes</p></a>
                        <a href="/tie-boxes">
                          <p>Tie Boxes</p></a>
                        <a href="/torch-boxes">
                          <p>Torch Boxes</p></a>
                        <a href="/two-pieces-rigid-boxes">
                          <p>Two Pieces Rigid Boxes</p></a>
                        <a href="/wallet-boxes">
                          <p>Wallet Boxes</p></a>
                        <a href="/watch-boxes">
                          <p>Watch Boxes</p></a>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div class="shop_need">
                  <h3 class="top_categoryy">
                    Shop by Need</h3><hr /><a href="/packaging-tapes" style={{ color: 'black' }}>
                    <p>Packaging Tapes</p></a>
                  <a href="/tissue-boxes" style={{ color: 'black' }}>
                    <p>Tissue Boxes</p></a>
                </div> */}
              </div>
              <div style={{ width: '100%' }}>
                <div class="main_products_packag">
                  <div class="main_products_packag2">
                    <a href="/advertising-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Advertising Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FAdvertising%20Box.pngFri%20Jun%2002%202023%2016%3A14%3A39%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=20511018-e1e9-4105-8a88-ebe2e21768dd" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Advertising Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/bath-bomb-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Bath Bomb Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FBath%20Bomb%20Packaging.pngFri%20Jun%2002%202023%2016%3A20%3A27%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=e595a533-dfd3-43a1-832d-8a7512970854" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Bath Bomb Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/box-with-window" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Box With Window" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FBox%20With%20Window.pngFri%20Jun%2002%202023%2016%3A23%3A22%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=639e8e1a-015f-40c2-90cb-28da3b2a1a98" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Box With Window</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/candle-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Candle Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FCandle%20Box.pngFri%20Jun%2002%202023%2016%3A25%3A11%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=9a1f401c-c084-4c83-9354-226b3962cb74" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Candle Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/card-deck-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Card Deck Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FCard%20Deck%20Box.pngFri%20Jun%2002%202023%2016%3A26%3A49%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=5bbffff2-1615-4314-b271-658d6226be77" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Card Deck Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/clothing-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Clothing Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FClothing%20Packaging.pngFri%20Jun%2002%202023%2016%3A28%3A43%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=b34df4c4-7ae4-445b-a79b-a15a9dfde2a5" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Clothing Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/dispenser-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Dispenser Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FDispenser%20Box.pngFri%20Jun%2002%202023%2016%3A32%3A17%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=46fafbbd-78f6-40ca-933c-647b79d9bffb" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Dispenser Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/gift-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Gift Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FGift%20Box.pngFri%20Jun%2002%202023%2016%3A42%3A40%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=7a20977e-f3c1-45fc-bb79-d53bffca03e4" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Gift Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/hair-extension-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Hair Extension Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FHair%20Extention%20Box.pngFri%20Jun%2002%202023%2016%3A47%3A52%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=ce94b3eb-00e7-48d5-a59a-e98e3a6d26d4" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Hair Extension Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/pillow-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Pillow Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FPillow%20Box.pngFri%20Jun%2002%202023%2016%3A50%3A35%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=49d7e08b-3393-4b6d-99d0-594428f1aced" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Pillow Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/pr-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="PR Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FPR%20Box.pngFri%20Jun%2002%202023%2016%3A56%3A28%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=68da7b31-88ba-43b1-a55c-3d368c90d913" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>PR Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/rigid-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Rigid Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FRigid%20Box.pngFri%20Jun%2002%202023%2017%3A56%3A40%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=f12bea7d-f783-4fae-b11c-0701d00febef" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Rigid Boxes</h3></div>
                        </div>
                      </div>
                    </a>
                    <a href="/shoe-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Shoe Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2Fshoe%20box.pngFri%20Jun%2002%202023%2017%3A59%3A29%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=9c76bb6f-180b-43a3-b4f6-a5280e75452b"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Shoe Boxes</h3></div></div></div></a>
                    <a href="/sleeve-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Sleeve Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FSleeve%20Box.pngFri%20Jun%2002%202023%2018%3A01%3A50%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=6c74b8ef-31a8-4c51-81d9-85f8d2f23402"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Sleeve Boxes</h3></div></div></div></a>
                    <a href="/soap-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Soap Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FSoap%20Box.pngFri%20Jun%2002%202023%2018%3A04%3A44%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=ca3483d1-e0bf-42e2-a208-66c2dc5ba717"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Soap Boxes</h3></div></div></div></a>
                    <a href="/tuck-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Tuck Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FTuck%20Box.pngFri%20Jun%2002%202023%2018%3A06%3A26%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=34ac0e4c-0571-48b6-9e52-0a2bdf6d250f"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Tuck Boxes</h3></div></div></div></a>
                    <a href="/gable-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Gable Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fgable-packaging-boxes.pngTue%20Aug%2029%202023%2006%3A54%3A51%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=6498f5e5-bc7e-4c25-92f1-b6763a746dfa"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Gable Boxes</h3></div></div></div></a>
                    <a href="/mailer-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Mailer Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2FMailer-Boxes.pngFri%20Aug%2025%202023%2019%3A46%3A05%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=fe7cf009-5eaf-4c27-a4c8-ce5aaf08e5c2"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Mailer Boxes</h3></div></div></div></a>
                    <a href="/custom-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Custom Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FSeptember_2023%2Fcustom-printed-boxes.pngFri%20Sep%2001%202023%2007%3A37%3A18%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=34942769-0449-45e0-a4b5-9fdf982a6e90"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Custom Boxes</h3></div></div></div></a>
                    <a href="/cardboard-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Cardboard Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FSeptember_2023%2FCollection%20pages.pngFri%20Sep%2022%202023%2005%3A11%3A01%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=348814f2-df0c-4c3a-9078-a80debfddee1"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Cardboard Boxes</h3></div></div></div></a>
                    <a href="/hard-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Hard Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FOctober_2023%2Fhard%20box.pngMon%20Oct%2009%202023%2003%3A24%3A09%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=440a80b3-d819-4b1b-a097-a49ee3e02815"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Hard Boxes</h3></div></div></div></a>
                    /<a href="/medicine-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Medicine Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FOctober_2023%2Fmedicine%20box.pngMon%20Oct%2009%202023%2003%3A28%3A14%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=28831e19-a8b0-4ace-84aa-b2a1811f937d"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Medicine Boxes</h3></div></div></div></a>
                  </div>
                </div>
                <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <ul class="ant-pagination css-yp8pcc">
                    <li title="Previous Page" class="ant-pagination-prev ant-pagination-disabled" aria-disabled="true">
                      <button class="ant-pagination-item-link" type="button" tabindex="-1" disabled="">
                        <span role="img" aria-label="left" class="anticon anticon-left">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li title="1" class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active" tabindex="0">
                      <a rel="nofollow">
                        1</a>
                    </li><li title="2" class="ant-pagination-item ant-pagination-item-2" tabindex="0">
                      <a rel="nofollow">
                        2</a>
                    </li><li title="Next Page" tabindex="0" class="ant-pagination-next" aria-disabled="false">
                      <button class="ant-pagination-item-link" type="button" tabindex="-1">
                        <span role="img" aria-label="right" class="anticon anticon-right">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Miximg} alt="" style={{ width: '100%', margin: 'auto' }} />
          </div>
          <div>
            <div class="main_sidemenus  hidden1">
              <div class="container">
                <div class="main_close_icon">
                  <img loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="close_icon" src="/images/closee.svg" style={{ color: 'transparent' }} /></div>
                <h2 class="top_category">
                  Category</h2><hr /><div class="Faq_section">
                  <div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperr">
                            Custom Boxes</h3></div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Cosmetic Boxes</h3></div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Display Boxes</h3></div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Food &amp; Beverages</h3></div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Metalized Boxes</h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Rigid Boxes</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop_need">
                  <h3 class="top_categoryy">
                    Shop by Need</h3><hr /><a href="/packaging-tapes" style={{ color: 'black' }}>
                    <p>Packaging Tapes</p></a>
                  <a href="/tissue-boxes" style={{ color: 'black' }}>
                    <p>Tissue Boxes</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="container">
          <div class="main_shop_by_need">
            <div class="main_need">
              <h2>Shop by Need</h2>
              <div class="need_section">
                <div class="slide_need">
                  <img class="one_image_need" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FAdvertising%20Box.pngFri%20Jun%2002%202023%2016%3A14%3A39%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=20511018-e1e9-4105-8a88-ebe2e21768dd" />
                  <a href="/advertising-boxes" style={{ color: 'black' }}>
                    <p>Advertising Boxes</p>
                  </a>
                </div>
                <div class="slide_need">
                  <img class="one_image_need" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FBath%20Bomb%20Packaging.pngFri%20Jun%2002%202023%2016%3A20%3A27%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=e595a533-dfd3-43a1-832d-8a7512970854" />
                  <a href="/bath-bomb-boxes" style={{ color: 'black' }}>
                    <p>Bath Bomb Boxes</p>
                  </a>
                </div>
                <div class="slide_need">
                  <img class="one_image_need" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FBox%20With%20Window.pngFri%20Jun%2002%202023%2016%3A23%3A22%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=639e8e1a-015f-40c2-90cb-28da3b2a1a98" />
                  <a href="/box-with-window" style={{ color: 'black' }}>
                    <p>Box With Window</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute' }}>
        <img src={S} alt="" style={{ width: '100%', margin: 'auto' }} />
      </div>
      <div className="main_storeproduct_video">
        <video autoplay="" loop="true" __idm_id__="483330" style={{ width: '100%', overflow: 'hidden' }}>
          <source src={Ayra} type="video/mp4" style={{ width: '100%', overflow: 'hidden' }} /></video>
      </div>
    </>
  );
};

export default Customs;
