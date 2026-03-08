/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html { scroll-behavior: smooth; }
body { transition: background-color 0.5s ease; color: #333; }

/* Navbar */
#navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
    background: #1a1a1a;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.logo { font-size: 1.5rem; font-weight: bold; }
.logo span { color: #00d4ff; }
.nav-links { display: flex; list-style: none; }
.nav-links li a {
    color: white;
    text-decoration: none;
    margin-left: 25px;
    font-weight: bold;
    transition: color 0.3s;
}
.nav-links li a:hover { color: #00d4ff; }

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}
.hero h1 { font-size: 3.5rem; margin-bottom: 10px; }

button {
    padding: 12px 30px;
    background: #00d4ff;
    color: #111;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 20px;
    transition: background 0.3s;
}
button:hover { background: #0099cc; color: white; }

/* Content Sections */
.content-section { padding: 100px 10%; text-align: center; }
.grey-bg { background: #f4f4f4; }
.underline {
    width: 60px; height: 4px; background: #00d4ff; margin: 10px auto 30px;
}

/* Services Grid */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

.service-card {
    background: #fff;
    padding: 30px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    border-bottom: 4px solid #00d4ff;
}
.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
.service-card h3 { margin-bottom: 10px; font-size: 1.2rem; }
.service-card p { font-size: 0.9rem; color: #666; }

/* Modal Styling */
.modal {
    display: none; 
    position: fixed; 
    z-index: 2000; 
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.7);
    backdrop-filter: blur(4px);
}
.modal-content {
    background-color: #fff;
    margin: 10% auto;
    padding: 40px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    text-align: left;
    position: relative;
    animation: slideDown 0.3s ease-out;
}
@keyframes slideDown {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}
.close-btn {
    position: absolute;
    right: 20px; top: 15px;
    font-size: 28px;
    color: #333;
    cursor: pointer;
}
.modal-list { margin-top: 15px; padding-left: 20px; line-height: 1.8; }

/* Job Board Styles */
.job-search-container { margin: 30px auto; max-width: 600px; }
#job-search {
    width: 100%; padding: 15px; border: 2px solid #00d4ff;
    border-radius: 8px; font-size: 1rem; outline: none; transition: box-shadow 0.3s;
}
#job-search:focus { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }

.job-list {
    max-width: 800px; margin: 0 auto; max-height: 450px; 
    overflow-y: auto; padding-right: 15px;
}
.job-card {
    background: #fff; border-left: 5px solid #00d4ff;
    padding: 20px; margin-bottom: 15px; border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.08); display: flex;
    justify-content: space-between; align-items: center; text-align: left;
    transition: transform 0.2s;
}
.job-card:hover { transform: translateX(5px); }
.job-info h3 { margin-bottom: 5px; color: #1a1a1a; font-size: 1.1rem; }
.job-info p { font-size: 0.9rem; color: #666; }

.apply-btn {
    padding: 8px 18px; background: #1a1a1a; color: white;
    text-decoration: none; border-radius: 5px; font-weight: bold;
    transition: background 0.3s; cursor: pointer; border: none; font-size: 0.9rem;
}
.apply-btn:hover { background: #00d4ff; color: #111; }

.job-list::-webkit-scrollbar { width: 8px; }
.job-list::-webkit-scrollbar-track { background: #e0e0e0; border-radius: 10px; }
.job-list::-webkit-scrollbar-thumb { background: #00d4ff; border-radius: 10px; }

/* Contact Form */
#contact-form { display: flex; flex-direction: column; max-width: 500px; margin: 0 auto; }
input, textarea {
    padding: 15px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; font-size: 1rem;
}