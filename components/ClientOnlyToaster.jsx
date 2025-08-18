"use client";

import { useEffect, useState } from 'react';
import { Toaster } from "sonner";

const ClientOnlyToaster = ({ position, toastOptions }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <Toaster
            position={position}
            toastOptions={toastOptions}
        />
    );
};

export default ClientOnlyToaster;
