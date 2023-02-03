import React from 'react';
import Container from "./hoc/Container/Container";
import CardList from "./components/CardList/CardList";
import SearchBar from "./components/SearchBar/SearchBar";
import Layout from "./hoc/Layout/Layout";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {
    return (
        <div className="App">
            <Layout>
                <Container>
                    <Header />
                    <MainContent />
                </Container>
            </Layout>
        </div>
    );
}
export default App;
