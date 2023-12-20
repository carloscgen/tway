import type { NextPage } from 'next'
import { Home } from '@/components/Home';

const Index: NextPage = () => {
    return (
        <Home details={false} />
    )
}

export default Index;
