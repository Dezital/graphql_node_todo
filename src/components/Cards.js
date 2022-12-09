import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Cards({ data }) {
  return (
    data &&
    data.map((d) => (
      <Card
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          marginTop: 20,
        }}
        key={d.id}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Job Title: <b>{d.title}</b> <br />
          </Typography>
          <Typography variant="body">
            <Grid container>
              <Grid item xs={6}>
                {" "}
                Company: <b>{d.company}</b>
              </Grid>
              <Grid item xs={6}>
                Email: <b>{d.email}</b>
              </Grid>
            </Grid>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: 20 }}
          >
            <b>Description</b> <br /> {d.desp}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              href="https://www.google.com/"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              Apply Now
            </a>
          </Button>
        </CardActions>
      </Card>
    ))
  );
}
