import React, { useState } from 'react'

export default function Try() {

    return (
        <div>

            {/* <ul class="list-group">
                <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <a className='nav-link disabled' aria-disabled="true" href="#">

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
                    </a>
                </li>

            </ul> */}


            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">
                Sign in
            </button>

            <div class="modal fade" id="Modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Get Started</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            
                                <div className="google">
                                <a href="#" style={{width:'80%',height:'10%', border:'1px solid black',display: 'flex', alignItems: 'center'}}>
                                    <span style={{padding:'10px',marginLeft:'8px'}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg></span>
                                    <p style={{ padding: '0%', margin: '0%', marginLeft: '50px' }}>Continue with Google</p>
                                    </a>
                                </div>
                            

                        </div>
                    </div>
                </div>
            </div>


            {/* <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div class="modal modal-xl fade" id="exampleModal" tabindex="-1">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                            <input type="search" style={{ width: '100%', height: '40px', paddingLeft: '3%' }} className='fs-6' placeholder='Search for your city' />
                            <div className='d-flex' style={{width:'100%'}}>   
                                <button style={{ color: 'red',border:'none',backgroundColor:'white',padding:'1% 0% 1% 0%' }}><span style={{marginTop:'-3px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crosshair2" viewBox="0 0 16 16">
                                    <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                                </svg></span>  Detect my location</button>
                            </div>
                        </div>
                        <div class="modal-body">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}



            {/* <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Sign in
            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 style={{marginLeft:'30%'}} class="modal-title fs-5" >Get Started</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                        
                        </div>
                    </div>
                </div>
            </div> */}


        </div>
    )
}
