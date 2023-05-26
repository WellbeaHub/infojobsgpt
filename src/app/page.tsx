import { NextPage } from 'next'
import { Card } from '../../components/Card'
import { LogoJob } from '../../components/LogoJob'
import { Tab, Tabs } from '../../components/Tabs'
import { TitleJob } from '../../components/TitleJob'

const cards = [
  { key: 'Salario', value: '$10 / hora' },
  { key: 'Tipo de trabajo', value: 'Tiempo completo' },
  { key: 'Ubicación', value: 'Remoto' },
  { key: 'Experiencia minima', value: '2 años' },
]

const Home: NextPage = () => {
  return (
    <main className="p-10">
      <section className="max-w-[800px] mx-auto">
        <div className="bg-[#F8F8F8] rounded-lg shadow-lg p-4">
          <div className="flex items-center space-x-4">
            <LogoJob
              src="https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/a9/a9bdb4db-f444-40e0-9e35-38304b455e05?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTY1Nzg2NTYsInJxcyI6IkdFVFxcL3RlbmFudHMvYzdlMmI5YzEtODQ4MC00M2IwLWFkOWUtMDAwYzE3YWEyY2JiL2RvbWFpbnMvNzE4MzAyYjYtNTM0My00M2QzLWE4YTMtODI5ZGMzZGEwODkzL2J1Y2tldHMvNmYzYWIxY2MtNTkyMC00ZjRlLWIxMzEtNDZhNDU4N2EwZTFmL2ltYWdlcy9hOS9hOWJkYjRkYi1mNDQ0LTQwZTAtOWUzNS0zODMwNGI0NTVlMDUiLCJtZXRhZGF0YSI6eyJydWxlIjp7InZlcnNpb24iOiIyMDE2LTEwIiwiYWN0aW9ucyI6W119fX0.A4XxlsC3sEa6EjUDOXOJmMsEpxHjCPVHixKwdEiORLCGdoyAsYe5ragj7mKZDW3cF9QRxJpdB-xx93U2ucox_lVFSHQIOknCkxzzlkK9uZUlXG187AcJGNXlKvfbhmDyROotj738ZWduveiY2F6oTT7A4hU36X4livX02rBJGpnNmPlDLQmIwuCA3JrdBpyP5T2iagPc5ODXj9PwWqcpMiZbawKJvMynMVdaushSUMqXdBm0XllAgqroelodhAH3i1C3xvYIGzt59amCxPFRqygRAk3b9GgPRjMu7vrARyEREYl45u5Md-wi_CCeaprSPwJ2Vprx-cBC8KtC69xWRQ&AccessKeyId=d724d9a53d95a810"
              alt="Logo"
            />

            <TitleJob title="React Native" nameCompany="WellbeaHub" />
          </div>

          <div className="flex flex-wrap justify-center mt-8 gap-4">
            {cards.map((card) => (
              <Card key={card.key}>
                <div className="flex flex-col justify-center items-center">
                  <p>{card.key}</p>
                  <h1 className="text-xl font-bold">{card.value}</h1>
                </div>
              </Card>
            ))}
          </div>

          <div className="container mx-auto mt-4">
            <Tabs>
              <Tab label="Descripción">
                <div>
                  <h2>Descripción Tab</h2>
                  <p>Contenido de la descripción...</p>
                </div>
              </Tab>
              <Tab label="Compañía">
                <div>
                  <h2>Compañía Tab</h2>
                  <p>Contenido de la compañía...</p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
