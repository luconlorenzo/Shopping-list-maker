import { useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {LuUser } from "react-icons/lu";
import { ModeToggle } from "./ThemeSwitcher";
import { useAuthStore } from "../store/authStore";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Header() {
	const auth = useAuthStore();
	const navigate = useNavigate();

	const buildProfileButton = useCallback(() => {
		if (auth.isLogging || auth.isUserLoading) {
			return (
				<Button variant="ghost" className="p-6">
					<AiOutlineLoading3Quarters className="animate-spin text-2xl mr-2" />
				</Button>
			);
		}

		if (!auth.user) {
			return ;
		}

		return (
			<Button
				className="mx-auto text-destructive hover:text-destructive flex gap-3"
				variant="ghost"
				onClick={() => {
					auth.logout();
					navigate(0);
				}}
			>
				<BiLogOutCircle className="text-2xl" />
				Logout
			</Button>
		);
	}, [auth]);

	return (
		
		<header className="py-8 px-10 flex justify-end">
			<div className="flex items-start">
				{buildProfileButton()}
				<ModeToggle />
			</div>
		</header>
					
	);
}

export default Header;
