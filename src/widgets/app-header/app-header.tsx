import { ToggleTheme } from "@/features/theme/toggle-themes";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";
import { FC } from "react";

interface IAppHeader {
  variant: "auth" | "private" | "public";
}

const AppHeader: FC<IAppHeader> = ({ variant }) => {
  const isProfile = variant !== "auth";

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  );
};

export default AppHeader;
