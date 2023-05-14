import React from "react";
import { Link } from "react-router-dom";
import plant from "./../Pictures/cover.png";
const Footer = () => {
  return (
    <section id="Footer">
      <div class="container">
        <div class="footerWrapper">
          <div class="footer_sites_one">
            <div class="img">
              <img src={plant} alt="img"></img>
            </div>
            <div class="info">
              <p>
                {" "}
                The world’s first and largest digital NFT marketplace for crypto
                collectibles & non fungible tokens (NFTs). Buy, sell, & discover
                exclusive digital items.{" "}
              </p>
            </div>
          </div>
          <div class="footer_sites_two">
            <div class="footertwoinfo">
              <h2>Marketplace</h2>
              <ul>
                <li>
                  <Link>Art</Link>
                </li>
                <li>
                  <Link>Collectibles</Link>
                </li>
                <li>
                  <Link>Domain Names</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer_sites_three">
            <div class="footertwoinfo">
              <h2>My Account</h2>
              <ul>
                <li>
                  <Link>Art</Link>
                </li>
                <li>
                  <Link>Collectibles</Link>
                </li>
                <li>
                  <Link>Domain Names</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer_sites_four">
            <div class="footertwoinfo">
              <h2>Resources</h2>
              <ul>
                <li>
                  <Link>Art</Link>
                </li>
                <li>
                  <Link>Collectibles</Link>
                </li>
                <li>
                  <Link>Domain Names</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-lg-center text-black mt-3">
          <p>
            Copyright & Design By <span>&#169;sumyta oishi</span> - 2023
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
