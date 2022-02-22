import React from "react";
import { Card } from "./card";

export const CardList = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <Card />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <Card />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <Card />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                            <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}