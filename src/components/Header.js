import logo from "../assets/NoteCodeLogo.svg";

export default function Header() {
    return (
        <header className="my-8 text-center">
            <img src={logo} alt='Logo' className="m-auto mb-7"/>
            <h3 className="mt-3 text-[32px]">Create & Share</h3>
            <h1 className="text-[40px]">Your Code easily</h1>
        </header>
    )
}