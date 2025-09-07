import React from "react";

function Header() {
  return (
    <section>
      <section>
        <div>
          {/* logo */}
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            />
          </a>
          {/* delivery */}
          <span>{/* icon */}</span>
          <div>
            <p>Delivered to </p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div>
          {/* search  */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          {/*icon */}
        </div>
        {/* right side link */}
        <div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt=""
            />
            <section>
              <option value="">EN</option>
            </section>
          </div>
          {/* three components */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>
          {/* cart */}
          <a to={"/cart"}>
            {/* icon */}
            <span>0</span>
          </a>
        </div>
      </section>
    </section>
  );
}

export default Header;
