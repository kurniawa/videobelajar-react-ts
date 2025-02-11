import LoginForm from "../components/organisms/LoginForm"
import MainLayout from "../layouts/MainLayout"

function Login() {
    return (
        <MainLayout>
            <main className="px-[20px] py-[28px] flex justify-center xl:py-[64px] xl:px-[120px]">
                <LoginForm />
            </main>
        </MainLayout>
    )
}

export default Login