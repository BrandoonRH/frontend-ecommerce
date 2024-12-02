import { useEffect } from 'react';

import {useRouter} from "next/navigation";

export function useAdminAuth() {
const router = useRouter();

    useEffect(() => {
        const isAdmin = localStorage.getItem('admin') === 'true';

        if (!isAdmin) {
            // Redirige al inicio si no es admin
            router.push('/');
        }
    }, [router]);
}
