// Components
import Layout from "@/components/Layout";
import ProfilePhoto from "@/components/profile/ProfilePhoto";
import ProfileMenu from "@/components/profile/ProfileMenu";
import Navbar from "@/components/Navbar";

export default function Profile() {
	return (
		<Layout title="Profile - Resip! App">
			<div className="d-flex justify-content-center min-vh-100">
				<div className="d-flex flex-column align-items-center bg-white mw-mobile pb-5">
					<ProfilePhoto />
					<ProfileMenu />
					<Navbar />
				</div>
			</div>
		</Layout>
	);
}
