import React from 'react'
import './App.css'
import Counter from './Count'

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

// function Logo() {
//   return (
//     <div className="logo" aria-hidden="false">
//       <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="site logo">
//         <rect width="36" height="24" rx="4" fill="#232f3e" />
//         <text x="9" y="16" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="12" fontWeight="700">a</text>
//       </svg>
//     </div>
//   )
// }

// export default function App() {
//   const [cartCount, setCartCount] = useState(0)

//   function addToCart() {
//     setCartCount((c) => c + 1)
//   }

//   return (
//     <div className="app-root">
//       <header className="topbar">
//         <div className="topbar-left">
//           <Logo />
//           <div className="site-title">
//             <span className="brand">Amazon</span>
//             <small className="sub">Web Webpage</small>
//           </div>
//         </div>

//         <nav className="topnav" aria-label="Main navigation">
//           <a href="#home" className="nav-link">Home</a>
//           <a href="#cart" className="nav-link">
//             <span className="cart-icon" aria-hidden>
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="#111" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//                 <circle cx="10" cy="20" r="1" fill="#111" />
//                 <circle cx="18" cy="20" r="1" fill="#111" />
//               </svg>
//             </span>
//             <span className="nav-text">Cart</span>
//             {cartCount > 0 && <span className="cart-badge" aria-live="polite">{cartCount}</span>}
//           </a>
//           <a href="#about" className="nav-link">About</a>
//         </nav>
//       </header>

//       <main className="app-main">
//         <section className="product-list">
//           {products.map((p) => (
//             <article key={p.id} className="product-card">
//               {p.image ? (
//                 <img src={p.image} alt={p.title} className="product-image" />
//               ) : (
//                 <div className="image-placeholder">Image</div>
//               )}
//               <h3 className="product-title">{p.title}</h3>
//               <p className="product-desc">{p.desc}</p>
//               <p className="price">${p.price.toFixed(2)}</p>
//               <button className="add-btn" onClick={addToCart}>Add to cart</button>
//             </article>
//           ))}
//         </section>
//       </main>

//       <footer className="app-footer">Made for classroom demo</footer>
//     </div>
//   )
// }
