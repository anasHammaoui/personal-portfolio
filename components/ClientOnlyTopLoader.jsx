"use client";

import { useEffect, useState } from 'react';
import NextTopLoader from "nextjs-toploader";

const ClientOnlyTopLoader = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <NextTopLoader />;
};

export default ClientOnlyTopLoader;
