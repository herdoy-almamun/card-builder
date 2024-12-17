import { buttonVariants } from "@/components/ui/button";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="h-[70px] flex items-center justify-center px-3 md:px-0 border-b">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image width={50} height={50} src="/logo.png" alt="logo" />
          </Link>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/register"> Log In </Link>
            </li>
            <li>
              <Link href="/register" className={buttonVariants({ size: "sm" })}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Nav;
