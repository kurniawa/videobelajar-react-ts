import EditProfile from "../components/organisms/EditProfile"
import MainLayout from "../layouts/MainLayout"

interface DashboardProps {
    type: string,
}

function Dashboard({type}: DashboardProps) {
    return (
        <MainLayout>
            <main className="px-[20px] py-[28px] xl:py-[64px] xl:px-[120px] flex gap-[24px] flex-row">
                <EditProfile type={type} />
            </main>
        </MainLayout>
    )
}

export default Dashboard