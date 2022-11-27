import React, { useEffect, useState } from 'react';

const useRole = (email) => {

    const [role, setRole] = useState(false)
    const [isRoleLoading, setIsRoleLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/role?email=${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('clotheToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRole(data)
                    setIsRoleLoading(false)
                })
        }
    }, [email])

    return [role, isRoleLoading]

};

export default useRole;