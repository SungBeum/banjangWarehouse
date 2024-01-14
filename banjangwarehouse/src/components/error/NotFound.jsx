import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../utils/routing";
import { HOME } from "../../constants/path";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    alert("잘못된 접근입니다.");
    navigateTo(navigate, HOME);
  }, [navigate]);

  return <div></div>;
}
