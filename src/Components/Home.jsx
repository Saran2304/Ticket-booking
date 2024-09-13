import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';
import india from './icons8-india-48.png';
import book from './image-1024x240.jpg'
import movie from './image-1000x300.jpg'
import movie1 from './image1-1000x300.jpg'

export default function Home() {
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    const [place, setplace] = useState('')
    console.log(place)

    // For GET data
    const [view, setview] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2300/movies/getfiles')
            .then((res) => setview(res.data))
            .catch((err) => console.log(err))
    }, [])

    // For FILTER movies

    function press(event) {

        const newitem = view.filter((newval) => newval.lang = newval.Tamil)
        setview(newitem)

    }

    function hin(event) {

        const item = view.filter((newval) => newval.lang = newval.Hindi)
        setview(item)
    }

    function eng(event) {

        const item = view.filter((newval) => newval.lang = newval.English)
        setview(item)
    }

    function telugu(event) {

        const item = view.filter((newval) => newval.lang = newval.Telugu)
        setview(item)
    }

    function malayalam(event) {

        const item = view.filter((newval) => newval.lang = newval.Malayalam)
        setview(item)
    }

    function clear() {

    }

    return (
        <div className='ticket'>
            <div className="main">

                <div class="navbar navbar-expand-lg">

                    <img className='navlogo d-none d-lg-block' src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="" />

                    <button className='top d-block d-lg-none'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg></span></button>
                    <p className='num d-flex d-lg-none'>Now Showing</p>
                    <p className='place d-flex d-lg-none'>{place} | 25Movies</p>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></span>
                    </button>

                    <div className="collapse navbar-collapse">

                        <input className='navsearch' placeholder='Search for Movies,Events,Sports and Activities' type="text" />

                        {/* <button className='navplace'>Coimbatore <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg></button> */}

                        <div class="dropdown">
                            <select class="btn navplace" onChange={(e) => setplace(e.target.value)}>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg></span>

                                <option value={'Coimbatore'}>Coimbatore</option>
                                <option value={"Tirupur"}>Tirupur</option>
                                <option value={"Chennai"}>Chennai</option>
                                <option value={"Madurai"}>Madurai</option>
                                <option value={"Tirunelveli"}>Tirunelveli</option>
                                <option value={"Thoothukudi"}>Thoothukudi</option>
                                <option value={"Vellore"}>Vellore</option>
                                <option value={"Thanjavur"}>Thanjavur</option>
                                <option value={"Kanyakumari"}>Kanyakumari</option>
                                <option value={"Ooty"}>Ooty</option>

                            </select>



                        </div>

                        <button className='navbutton' data-bs-toggle="modal" data-bs-target="#Modal">Sign in</button>

                        <div class="modal fade" id="Modal" tabindex="-1">
                            <div class="modal-dialog modal-md modal-dialog-centered ">
                                <div class="modal-content w-100 ms-5">
                                    <div class="modal-body sign">
                                        <div className='modalclose'>
                                            <h1 class="modal-title fs-6" id="exampleModalLabel">Get Started</h1>
                                            <button data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                            </svg></button>
                                        </div><br /><br />

                                        <div className='signin'>
                                            <a className="google" href="https://accounts.google.com/o/oauth2/auth?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fin.bookmyshow.com%3Fid%3Dauth7549&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm=&include_granted_scopes=true&client_id=990572338172-iibth2em4l86htv30eg1v44jia37fuo5.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fin.bookmyshow.com&fetch_basic_profile=true&gsiwebsdk=2" >
                                                <span style={{ padding: '10px', marginLeft: '8px', marginBottom: '3px' }}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                                </svg></span>
                                                <p style={{ padding: '0%', margin: '0%', marginLeft: '50px' }}>Continue with Google</p>
                                            </a><br />
                                            <a className="google" href="" >
                                                <span style={{ padding: '10px', marginLeft: '8px', marginBottom: '3px' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                                </svg></span>
                                                <p style={{ padding: '0%', margin: '0%', marginLeft: '50px' }}>Continue with Email</p>
                                            </a><br />
                                            <a className="google" href="" >
                                                <span style={{ padding: '10px', marginLeft: '8px', marginBottom: '3px' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                                </svg></span>
                                                <p style={{ padding: '0%', margin: '0%', marginLeft: '50px' }}>Continue with Apple</p>
                                            </a><br />
                                            <p>OR</p><br />
                                            <div className='inum'>
                                                <img src={india} />
                                                <p>+91</p>
                                                <input type="text" placeholder='Continue with mobile number' className='phone' />
                                            </div><br /><br /><br /><br />
                                            <div className='agree'>
                                                <input type="checkbox" /><p>I agree to the <a href="#"> Terms & Conditions</a> & <a href="#">Privacy Policy</a></p>
                                            </div><br />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='sidebar d-none d-lg-block'>

                    <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#off"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg></button>

                    <div class="offcanvas offcanvas-end" style={{ width: '35%' }} data-bs-scroll="true" tabindex="-1" id="off" >
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title fs-4" style={{ fontWeight: '700' }}>Hey!</h5>
                        </div><hr style={{ marginTop: '-0px' }} />
                        <div class="offcanvas-body side-bar" style={{ padding: '0px' }}>

                            <div className="log">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                                </svg></span>
                                <p>Unlock special offers& great benefits</p>
                                <button>Login / Register</button>
                            </div>

                            <ul className='menu'>
                                <a href="#">
                                    <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div className='notifi'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                            </svg></span>
                                            <p className='para'>Notifications</p>
                                        </div>
                                        <span style={{ padding: '15px 15px 0px 15px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </li>
                                </a>

                                <hr style={{ opacity: '0.2', marginTop: '0px', marginBottom: '0px' }} />

                                <a className='nav-link disabled' style={{ opacity: '0.4' }} href="#">
                                    <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div className='notifi'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                            </svg></span>
                                            <div>
                                                <p className='para1'>Your Orders</p>
                                                <p className='para2'>View all your bookings & purchases</p>
                                            </div>
                                        </div>
                                        <span style={{ padding: '15px 15px 0px 15px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </li>
                                </a>

                                <hr style={{ opacity: '0.1', marginTop: '0px', marginBottom: '0px' }} />

                                <a className='nav-link disabled' style={{ opacity: '0.4' }} href="#">
                                    <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div className='notifi'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                                                <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
                                            </svg></span>
                                            <div>
                                                <p className='para1'>Stream Library</p>
                                                <p className='para2'>Rented & purchased Movies</p>
                                            </div>
                                        </div>
                                        <span style={{ padding: '15px 15px 0px 15px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </li>
                                </a>

                                <hr style={{ opacity: '0.1', marginTop: '0px', marginBottom: '0px' }} />

                                <a href="#">
                                    <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div className='notifi'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                                <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                                <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                                            </svg></span>
                                            <div>
                                                <p className='para1'>Play Credit Card</p>
                                                <p className='para2'>View your Play Credit Card details and offers</p>
                                            </div>
                                        </div>
                                        <span style={{ padding: '15px 15px 0px 15px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </li>
                                </a>

                                <hr style={{ opacity: '0.2', marginTop: '0px', marginBottom: '0px' }} />

                                <a href="#">
                                    <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div className='notifi'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                                            </svg></span>
                                            <div>
                                                <p className='para1'>Help & Support</p>
                                                <p className='para2'>View commonly asked queries and Chat</p>
                                            </div>
                                        </div>
                                        <span style={{ padding: '15px 15px 0px 15px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </li>
                                </a>

                                <hr style={{ opacity: '0.2', marginTop: '0px', marginBottom: '0px' }} />

                                <a className='nav-link disabled' style={{ opacity: '0.4' }} href="#">
                                    <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div className='notifi'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                            </svg></span>
                                            <div>
                                                <p className='para1'>Accounts & Settings</p>
                                                <p className='para2'>Location, Payments, Permissions & More</p>
                                            </div>
                                        </div>
                                        <span style={{ padding: '15px 15px 0px 15px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </li>
                                </a>

                                <hr style={{ opacity: '0.1', marginTop: '0px', marginBottom: '0px' }} />

                                <a href="#">
                                    <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div className='notifi'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                                            </svg></span>
                                            <div>
                                                <p className='para1'>Rewards</p>
                                                <p className='para2'>View your rewards & unlock new ones</p>
                                            </div>
                                        </div>
                                        <span style={{ padding: '15px 15px 0px 15px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </li>
                                </a>

                                <hr style={{ opacity: '0.2', marginTop: '0px', marginBottom: '0px' }} />

                                <a href="#">
                                    <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div className='notifi'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                                            </svg></span>
                                            <p className='para'>BookASmile</p>
                                        </div>
                                        <span style={{ padding: '15px 15px 0px 15px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </li>
                                </a>


                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <section>
                <div className="moviesection d-none d-lg-block overflow-hidden overflow-lg-none ">
                    <ul className='moviesul'>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Stream</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Plays</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Activities</a></li>
                    </ul>
                    <ul className='moviesright d-none d-lg-flex '>
                        <li><a href="#">ListYourShow</a></li>
                        <li><a href="#">Corporates</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>
                </div>
            </section>


            <section>
                <div className="movies overflow-hidden overflow-lg-none">
                    <div className="banner">
                        <div id="carouselControls" className="carousel slide" >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={movie} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img src={book} class="d-block w-100" alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img src={movie1} class="d-block w-100" alt="" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>


                <div className='collections'>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 d-none d-lg-block">
                                <h3 className='filterhead d-flex'>Filters</h3><br />
                                <div className="language">
                                    <button class="languagebtn" type="button" data-bs-toggle="collapse" data-bs-target="#one" >
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                        </svg></span><p>Language</p>
                                    </button >
                                    <button className='clear' onClick={clear}>Clear</button>
                                    <div class="collapse" id='one'>
                                        <div className="languages">

                                            <button className="col btn" onClick={press}>Tamil</button>
                                            <button className="col btn" onClick={hin}>Hindi</button>
                                            <button className="col btn" onClick={eng}>English</button>
                                            <button className="coll btn" onClick={telugu}>Telugu</button>
                                            <button className="coll btn" style={{ width: '100px' }} onClick={malayalam}>Malayalam</button>

                                        </div>
                                    </div>
                                </div>

                                <div className='genere'>
                                    <button className='generesbtn' type='button' data-bs-toggle="collapse" data-bs-target="#two">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                        </svg></span><p>Generes</p>
                                    </button>
                                    <button className='clear'>Clear</button>
                                    <div className='collapse' id='two'>
                                        <div className='generes'>
                                            <button className="col btn">Drama</button>
                                            <button className="col btn">Action</button>
                                            <button className="col btn">Comedy</button>
                                            <button className="col btn">Thriller</button>
                                            <button className="col btn">Adventure</button>
                                            <button className="col btn">Crime</button>
                                            <button className="col btn">Horrer</button>
                                            <button className="col btn">Mystery</button>
                                            <button className="col btn">Romantic</button>
                                            <button className="col btn">Animation</button>
                                            <button className="col btn">Sci-Fi</button>
                                            <button className="col btn">Fantacy</button>
                                            <button className="coll btn" style={{ width: '90px' }}>Biography</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="format">
                                    <button className='formatbtn' type='button' data-bs-toggle="collapse" data-bs-target="#three">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                        </svg></span><p>Format</p>
                                    </button>
                                    <button className='clear'>Clear</button>
                                    <div className='collapse' id='three'>
                                        <div className='formats'>
                                            <button className="col btn">2D</button>
                                            <button className="col btn">3D</button>
                                            <button className="col btn">IMAX 3D</button>
                                        </div>
                                    </div>
                                </div>


                                <div className="browse">
                                    <button>Browse by Cinemas</button>
                                </div>

                            </div>




                            <div className="col-8 movies-cbe">
                                <div className='row row-cols-1'>
                                    <div className="col">
                                        <h3 className='filterhead d-none d-lg-flex '>Movies in Coimbatore</h3>
                                        <div className='movieslanguage'>
                                            <button onClick={press}>Tamil</button>
                                            <button onClick={hin}>Hindi</button>
                                            <button onClick={eng}>English</button>
                                            <button onClick={telugu}>Telugu</button>
                                            <button>Gujarati</button>
                                            <button>Kannada</button>
                                            <button>Korean</button>
                                            <button onClick={malayalam}>Malayalam</button>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className='comingsoon'>
                                            <p>Coming Soon</p>
                                            <button>Explore Upcoming Movies  <svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '2px' }} width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg></button>
                                        </div><br /><br />

                                    </div>
                                    <div className="col">
                                        <div className="movie-grid ">

                                            {
                                                view.map((item) => {
                                                    return (
                                                        <div className='movielist'>
                                                            <img height="200" width="130" src={`http://localhost:2300/movies/upload/${item.MovieImage}`} alt='movie' />
                                                            <br /><h3 className='name'>{item.MovieName}</h3>
                                                            <p>{item.MovieGrade}</p>
                                                            <p className='lan'>{item.MovieLanguages}</p>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>

                                    </div>

                                </div>





                            </div>


                        </div>
                    </div>
                </div>

            </section>

        </div >
    )
}
