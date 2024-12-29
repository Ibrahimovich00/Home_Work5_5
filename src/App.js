import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import './style.css'


function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/user/:id' element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App;
