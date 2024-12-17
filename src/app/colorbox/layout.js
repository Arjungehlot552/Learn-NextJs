export default function RootLayout({ children , left , right }) {
    const isSidebar = false;
    return (
        <section>
            {children}
            {/* {left}
            {right} */}

            // conditional rendering
            {isSidebar? left : right}
        </section>
    )
}