// pages/login.js
import { useRouter } from "next/router"
import { Magic } from "magic-sdk"
import Head from "next/head"
import Script from "next/script"
export default function Login() {
    const router = useRouter()
    // pages/login.js

    const handleSubmit = async (event) => {
        event.preventDefault()

        const { elements } = event.target

        // the magic code
        const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY).auth.loginWithMagicLink({
            email: elements.email.value,
        })

        // Once we have the did from magic, login with our own API
        const authRequest = await fetch("/api/login", {
            method: "POST",
            headers: { Authorization: `Bearer ${did}` },
        })

        if (authRequest.ok) {
            // We successfully logged in, our API
            // set authorization cookies and now we
            // can redirect to the dashboard!
            router.push("/dashboard")
        } else {
            alert("Invalid Details")
            /* handle errors */
        }
    }

    return (
        <div className="containerLogin">
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                ></link>
            </Head>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"
            ></Script>
            <form className="row g-3 loginForm" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label">
                        Email
                    </label>
                    <input type="email" name="email" className="form-control" id="inputEmail4" />
                </div>

                {/* 
        <div className="col-md-12 passwordInput">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div> */}

                <div className="col-12 check">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12 signInBtn">
                    <button type="submit" className="btn btn-primary">
                        Login Or Register
                    </button>
                </div>
            </form>
        </div>
    )
}
